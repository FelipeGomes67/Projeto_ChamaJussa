using ChamaJussaAPI.Models;

namespace ChamaJussaAPI.Interfaces;

public interface IOrdemServicoRepository
{
    Task CadastrarAsync(OrdemServico ordemServico);
    Task DeletarAsync(Guid id);
    Task<List<OrdemServico>> ListarAsync();
    Task<OrdemServico?> ObterPorIdAsync(Guid id);
    Task AtualizarAsync(OrdemServico ordemServico);
}