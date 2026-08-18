using ChamaJussaAPI.DTOs;
using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using ChamaJussaAPI.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly IUsuarioRepository _usuarioRepository;

    public UsuarioController(IUsuarioRepository usuarioRepository)
    {
        _usuarioRepository = usuarioRepository;
    }

    [HttpPost]
    public async Task<IActionResult> Cadastrar([FromBody] UsuarioDto usuarioDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var usuarioExistente = await _usuarioRepository.ObterPorEmailAsync(usuarioDto.Email);
        if (usuarioExistente != null)
            return BadRequest(new { mensagem = "O e-mail informado já está cadastrado." });

        if (string.IsNullOrWhiteSpace(usuarioDto.Senha))
            return BadRequest(new { mensagem = "A senha é obrigatória para o cadastro." });

        var usuario = new Usuario
        {
            Nome = usuarioDto.Nome,
            Email = usuarioDto.Email,
            Senha = Criptografia.GerarHash(usuarioDto.Senha),
            TipoUsuario = string.IsNullOrWhiteSpace(usuarioDto.TipoUsuario) ? "Comum" : usuarioDto.TipoUsuario
        };

        await _usuarioRepository.CadastrarAsync(usuario);

        var respostaDto = new
        {
            usuario.IdUsuario,
            usuario.Nome,
            usuario.Email,
            usuario.TipoUsuario
        };

        return CreatedAtAction("ObterPorId", new { id = usuario.IdUsuario }, respostaDto);
    }

    [HttpGet]
    public async Task<IActionResult> ListarAsync()
    {
        var usuarios = await _usuarioRepository.ListarAsync();

        var listaDto = usuarios.Select(u => new
        {
            u.IdUsuario,
            u.Nome,
            u.Email,
            u.TipoUsuario
        }).ToList();

        return Ok(listaDto);
    }

    [HttpGet("{id:guid}", Name = "ObterPorId")]
    [Authorize]
    public async Task<IActionResult> ObterPorIdAsync(Guid id)
    {
        var usuario = await _usuarioRepository.ObterPorIdAsync(id);
        if (usuario == null)
            return NotFound(new { mensagem = "Usuário não encontrado." });

        var dto = new
        {
            usuario.IdUsuario,
            usuario.Nome,
            usuario.Email,
            usuario.TipoUsuario
        };

        return Ok(dto);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Atualizar(Guid id, [FromBody] UsuarioDto usuarioDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var usuario = await _usuarioRepository.ObterPorIdAsync(id);
        if (usuario == null)
            return NotFound(new { mensagem = "Usuário não encontrado." });

        usuario.Nome = usuarioDto.Nome;
        usuario.Email = usuarioDto.Email;
        usuario.TipoUsuario = usuarioDto.TipoUsuario;

        if (!string.IsNullOrWhiteSpace(usuarioDto.Senha))
        {
            usuario.Senha = Criptografia.GerarHash(usuarioDto.Senha);
        }

        await _usuarioRepository.AtualizarAsync(usuario);

        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Deletar(Guid id)
    {
        var usuario = await _usuarioRepository.ObterPorIdAsync(id);
        if (usuario == null)
            return NotFound(new { mensagem = "Usuário não encontrado." });

        await _usuarioRepository.DeletarAsync(id);
        return NoContent();
    }
}