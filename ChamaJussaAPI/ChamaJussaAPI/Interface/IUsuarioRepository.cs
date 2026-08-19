using ChamaJussaAPI.Models;

namespace ChamaJussaAPI.Interfaces;

public interface IUsuarioRepository
{
    Task CadastrarAsync(Usuario usuario);
    Task DeletarAsync(Guid id);
    Task<List<Usuario>> ListarAsync();
    Task<Usuario?> ObterPorIdAsync(Guid id);
    Task<Usuario?> ObterPorEmailAsync(string email);
    Task AtualizarAsync(Usuario usuario);
}