using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaAPI.Models;

public partial class ChamaJussaDbContext : DbContext
{
    public ChamaJussaDbContext()
    {
    }

    public ChamaJussaDbContext(DbContextOptions<ChamaJussaDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<OrdemServico> OrdemServicos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=ChamaJussaBD;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<OrdemServico>(entity =>
        {
            entity.HasKey(e => e.IdOs).HasName("PK__OrdemSer__B770330FC7FEFAC5");

            entity.ToTable("OrdemServico");

            entity.Property(e => e.IdOs)
                .HasDefaultValueSql("(newid())")
                .HasColumnName("IdOS");
            entity.Property(e => e.Equipamento).HasMaxLength(100);
            entity.Property(e => e.Imagem)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Local).HasMaxLength(100);
            entity.Property(e => e.Status)
                .HasMaxLength(20)
                .HasDefaultValue("Aberto");
            entity.Property(e => e.Titulo).HasMaxLength(100);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__5B65BF976D466482");

            entity.ToTable("Usuario");

            entity.HasIndex(e => e.Email, "UQ__Usuario__A9D10534405AAA09").IsUnique();

            entity.Property(e => e.IdUsuario).HasDefaultValueSql("(newid())");
            entity.Property(e => e.Email)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Senha)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.TipoUsuario)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValue("Comum");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
