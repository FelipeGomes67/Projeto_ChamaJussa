using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaAPI.Repositories;

public class OrdemServicoRepository : IOrdemServicoRepository
{
    private readonly ChamaJussaDbContext _context;

    public OrdemServicoRepository(ChamaJussaDbContext context)
    {
        _context = context;
    }

    public async Task CadastrarAsync(OrdemServico ordemServico)
    {
        await _context.OrdemServicos.AddAsync(ordemServico);
        await _context.SaveChangesAsync();
    }

    public async Task<List<OrdemServico>> ListarAsync()
    {
        return await _context.OrdemServicos.ToListAsync();
    }

    public async Task<OrdemServico?> ObterPorIdAsync(Guid id)
    {
        return await _context.OrdemServicos.FindAsync(id);
    }

    public async Task AtualizarAsync(OrdemServico ordemServico)
    {
        _context.OrdemServicos.Update(ordemServico);
        await _context.SaveChangesAsync();
    }

    public async Task DeletarAsync(Guid id)
    {
        var ordemServico = await ObterPorIdAsync(id);
        if (ordemServico != null)
        {
            _context.OrdemServicos.Remove(ordemServico);
            await _context.SaveChangesAsync();
        }
    }
}