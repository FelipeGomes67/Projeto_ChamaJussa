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
    public async Task<IActionResult> Cadastrar([FromBody] OrdemServicoDto ordemServicoDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var os = new OrdemServico
        {
            IdOs = Guid.NewGuid(),
            Titulo = ordemServicoDto.Titulo,
            Equipamento = ordemServicoDto.Equipamento,
            Local = ordemServicoDto.Local,
            Descricao = ordemServicoDto.Descricao,
            Imagem = ordemServicoDto.Imagem,
            Status = string.IsNullOrWhiteSpace(ordemServicoDto.Status) ? "Aberto" : ordemServicoDto.Status
        };

        await _ordemServicoRepository.CadastrarAsync(os);

        ordemServicoDto.IdOS = os.IdOs;

        return CreatedAtAction(nameof(ObterPorId), new { id = os.IdOs }, ordemServicoDto);
    }

    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var ordens = await _ordemServicoRepository.ListarAsync();

        var listaDto = ordens.Select(os => new OrdemServicoDto
        {
            IdOS = os.IdOs,
            Titulo = os.Titulo,
            Equipamento = os.Equipamento,
            Local = os.Local,
            Descricao = os.Descricao,
            Imagem = os.Imagem,
            Status = os.Status
        }).ToList();

        return Ok(listaDto);
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> ObterPorId(Guid id)
    {
        var os = await _ordemServicoRepository.ObterPorIdAsync(id);
        if (os == null)
            return NotFound(new { mensagem = "Ordem de Serviço não encontrada." });

        var dto = new OrdemServicoDto
        {
            IdOS = os.IdOs,
            Titulo = os.Titulo,
            Equipamento = os.Equipamento,
            Local = os.Local,
            Descricao = os.Descricao,
            Imagem = os.Imagem,
            Status = os.Status
        };

        return Ok(dto);
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Atualizar(Guid id, [FromBody] OrdemServicoDto ordemServicoDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var os = await _ordemServicoRepository.ObterPorIdAsync(id);
        if (os == null)
            return NotFound(new { mensagem = "Ordem de Serviço não encontrada." });

        os.Titulo = ordemServicoDto.Titulo;
        os.Equipamento = ordemServicoDto.Equipamento;
        os.Local = ordemServicoDto.Local;
        os.Descricao = ordemServicoDto.Descricao;
        os.Imagem = ordemServicoDto.Imagem;
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