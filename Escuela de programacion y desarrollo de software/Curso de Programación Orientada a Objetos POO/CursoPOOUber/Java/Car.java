public class Car {
    private Integer id;
    private String license;
    private Account driver;
    private Integer passenger;

    public Car(Integer id, String license, Account driver, Integer passenger) {
        this.id = id;
        this.license = license;
        this.driver = driver;
        this.passenger = passenger;
    }

    public Integer getPassenger() {
        return passenger;
    }

    public void setPassenger(Integer passenger) {
        if (passenger == 4) {
            this.passenger = passenger;
        } else {
            System.out.println("Debes asignar 4 pasageros");
        }

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Account getDriver() {
        return driver;
    }

    public void setDriver(Account driver) {
        this.driver = driver;
    }

    void printDataCar() {
        if (passenger != null) {
            System.out.println("Id Del conductor: " + id + " License: " + license + " Diver: " + driver.name
                    + " numero de pasageros: " + passenger);
        }

    }
}
