using ChamaJussaAPI.DTOs;
using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ChamaJussaAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrdemServicoController : ControllerBase
{
    private readonly IOrdemServicoRepository _ordemServicoRepository;

    public OrdemServicoController(IOrdemServicoRepository ordemServicoRepository)
    {
        _ordemServicoRepository = ordemServicoRepository;
    }

    [HttpPost]
    public async Task<IActionResult> Cadastrar([FromForm] OrdemServicoDto ordemServicoDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        string caminhoImagem = string.Empty;
        if (ordemServicoDto.Imagem != null && ordemServicoDto.Imagem.Length > 0)
        {
            var pastaUploads = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            if (!Directory.Exists(pastaUploads))
                Directory.CreateDirectory(pastaUploads);

            var nomeArquivo = $"{Guid.NewGuid()}{Path.GetExtension(ordemServicoDto.Imagem.FileName)}";
            var caminhoCompleto = Path.Combine(pastaUploads, nomeArquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await ordemServicoDto.Imagem.CopyToAsync(stream);
            }

            caminhoImagem = $"/uploads/{nomeArquivo}";
        }

        var os = new OrdemServico
        {
            Titulo = ordemServicoDto.Titulo,
            Equipamento = ordemServicoDto.Equipamento,
            Local = ordemServicoDto.Local,
            Descricao = ordemServicoDto.Descricao,
            Imagem = caminhoImagem,
            Status = string.IsNullOrWhiteSpace(ordemServicoDto.Status) ? "Aberto" : ordemServicoDto.Status
        };

        await _ordemServicoRepository.CadastrarAsync(os);

        return CreatedAtAction(nameof(ObterPorId), new { id = os.IdOs }, os);
    }

    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var ordens = await _ordemServicoRepository.ListarAsync();
        return Ok(ordens);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> ObterPorId(Guid id)
    {
        var os = await _ordemServicoRepository.ObterPorIdAsync(id);
        if (os == null)
            return NotFound(new { mensagem = "Ordem de Serviço não encontrada." });

        return Ok(os);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Atualizar(Guid id, [FromForm] OrdemServicoDto ordemServicoDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var os = await _ordemServicoRepository.ObterPorIdAsync(id);
        if (os == null)
            return NotFound(new { mensagem = "Ordem de Serviço não encontrada." });

        if (ordemServicoDto.Imagem != null && ordemServicoDto.Imagem.Length > 0)
        {
            var pastaUploads = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            if (!Directory.Exists(pastaUploads))
                Directory.CreateDirectory(pastaUploads);

            var nomeArquivo = $"{Guid.NewGuid()}{Path.GetExtension(ordemServicoDto.Imagem.FileName)}";
            var caminhoCompleto = Path.Combine(pastaUploads, nomeArquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await ordemServicoDto.Imagem.CopyToAsync(stream);
            }

            os.Imagem = $"/uploads/{nomeArquivo}";
        }

        os.Titulo = ordemServicoDto.Titulo;
        os.Equipamento = ordemServicoDto.Equipamento;
        os.Local = ordemServicoDto.Local;
        os.Descricao = ordemServicoDto.Descricao;
        os.Status = ordemServicoDto.Status;

        await _ordemServicoRepository.AtualizarAsync(os);

        return NoContent();
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Deletar(Guid id)
    {
        var os = await _ordemServicoRepository.ObterPorIdAsync(id);
        if (os == null)
            return NotFound(new { mensagem = "Ordem de Serviço não encontrada." });

        await _ordemServicoRepository.DeletarAsync(id);
        return NoContent();
    }
}