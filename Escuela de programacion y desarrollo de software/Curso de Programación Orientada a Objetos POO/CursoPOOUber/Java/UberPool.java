
public class UberPool extends Car {
    String brand;
    String model;

    public UberPool(Integer id, String license, Account driver, Integer passenger, String brand, String model) {
        super(id, license, driver, passenger);
        this.brand = brand;
        this.model = model;

    }
}
