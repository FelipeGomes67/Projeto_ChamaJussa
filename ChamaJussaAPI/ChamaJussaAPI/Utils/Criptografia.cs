namespace ChamaJussaAPI.Utils;

public class Criptografia
{
    public static string GerarHash(string senha)
    {
        return BCrypt.Net.BCrypt.HashPassword(senha);
    }
    public static bool CompararHash(string senhaDigitada, string senhaHashBanco)
    {
        return BCrypt.Net.BCrypt.Verify(senhaDigitada, senhaHashBanco);
    }


}
