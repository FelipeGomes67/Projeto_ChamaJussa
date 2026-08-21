using ChamaJussaAPI.DTOs;
using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Services;
using ChamaJussaAPI.Utils;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IUsuarioRepository _usuarioRepository;
    private readonly ITokenService _tokenService;

    public AuthController(
        IUsuarioRepository usuarioRepository,
        ITokenService tokenService)
    {
        _usuarioRepository = usuarioRepository;
        _tokenService = tokenService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var usuario = await _usuarioRepository.ObterPorEmailAsync(dto.Email);

        if (usuario != null && Criptografia.CompararHash(dto.Senha, usuario.Senha))
        {
            var token = _tokenService.GerarToken(usuario.IdUsuario, usuario.Nome, usuario.Email, usuario.TipoUsuario);

            return Ok(new LoginRespostaDto
            {
                Id = usuario.IdUsuario,
                Nome = usuario.Nome,
                Email = usuario.Email,
                TipoUsuario = usuario.TipoUsuario,
                Token = token
            });
        }

        return Unauthorized(new { mensagem = "E-mail ou senha inválidos." });
    }
}