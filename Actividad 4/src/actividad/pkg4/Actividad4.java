
package actividad.pkg4;
import java.util.Scanner;
public class Actividad4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Pedir los valores al usuario
        System.out.println("contidad de veces quieres que se ejecute ");
        System.out.print("Ingrese cuántos números desea generar: ");
        int n = scanner.nextInt();
        System.out.println("semilla");
        System.out.print("Ingrese el valor de x:  ");    
        int x = scanner.nextInt(); 
        System.out.println("constante de multiplicacion");
        System.out.print("Ingrese el valor de a:  ");
        int a = scanner.nextInt();
        System.out.println("constante aditiva");
        System.out.print("Ingrese el valor de c:  ");
        int c = scanner.nextInt();
        System.out.println("Moldulo");
        System.out.print("Ingrese el valor de m: ");
        int m = scanner.nextInt();

        System.out.println("\nNumeros generados:");
        //procesos 
        for (int i = 0; i < n; i++) {
            x = (a * x + c) % m; // Método congruencial lineal
            double resultado = (double)x / (m-1); 
            String redondeo = String.format("%.4f", resultado);
            System.out.println("x ="+x+"      "+ "r= "+redondeo);
           
        }
        scanner.close();
        return;
    }
}
 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
