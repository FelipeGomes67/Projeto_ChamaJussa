using ChamaJussaAPI.Interfaces;
using ChamaJussaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaAPI.Repositories;

public class UsuarioRepository : IUsuarioRepository
{
    private readonly ChamaJussaDbContext _context;

    public UsuarioRepository(ChamaJussaDbContext context)
    {
        _context = context;
    }

    public async Task CadastrarAsync(Usuario usuario)
    {
        await _context.Usuarios.AddAsync(usuario);
        await _context.SaveChangesAsync();
    }

    public async Task<List<Usuario>> ListarAsync()
    {
        return await _context.Usuarios.ToListAsync();
    }

    public async Task<Usuario?> ObterPorIdAsync(Guid id)
    {
        return await _context.Usuarios.FindAsync(id);
    }

    public async Task<Usuario?> ObterPorEmailAsync(string email)
    {
        return await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task AtualizarAsync(Usuario usuario)
    {
        _context.Usuarios.Update(usuario);
        await _context.SaveChangesAsync();
    }

    public async Task DeletarAsync(Guid id)
    {
        var usuario = await ObterPorIdAsync(id);
        if (usuario != null)
        {
            _context.Usuarios.Remove(usuario);
            await _context.SaveChangesAsync();
        }
    }
}