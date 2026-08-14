using ChamaJussaAPI.DTOs;
using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
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
            IdUsuario = Guid.NewGuid(),
            Nome = usuarioDto.Nome,
            Email = usuarioDto.Email,
            Senha = usuarioDto.Senha, 
            TipoUsuario = string.IsNullOrWhiteSpace(usuarioDto.TipoUsuario) ? "Comum" : usuarioDto.TipoUsuario
        };

        await _usuarioRepository.CadastrarAsync(usuario);

        usuarioDto.IdUsuario = usuario.IdUsuario;
        usuarioDto.Senha = null;

        return CreatedAtAction(nameof(ObterPorId), new { id = usuario.IdUsuario }, usuarioDto);
    }

    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var usuarios = await _usuarioRepository.ListarAsync();

        var listaDto = usuarios.Select(u => new UsuarioDto
        {
            IdUsuario = u.IdUsuario,
            Nome = u.Nome,
            Email = u.Email,
            TipoUsuario = u.TipoUsuario
        }).ToList();

        return Ok(listaDto);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> ObterPorId(Guid id)
    {
        var usuario = await _usuarioRepository.ObterPorIdAsync(id);
        if (usuario == null)
            return NotFound(new { mensagem = "Usuário não encontrado." });

        var dto = new UsuarioDto
        {
            IdUsuario = usuario.IdUsuario,
            Nome = usuario.Nome,
            Email = usuario.Email,
            TipoUsuario = usuario.TipoUsuario
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
            usuario.Senha = usuarioDto.Senha;
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