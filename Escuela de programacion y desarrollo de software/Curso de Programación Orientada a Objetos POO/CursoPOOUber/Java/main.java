class Main {
    public static void main(String[] args) {

        try {
            System.out.println("Hola Mundo");

            UberX uberX = new UberX(1, "WIN7011", new Account(1, "Edwin", "1234567", "edwin123@gmail.com"), 4,
                    "Chevrolet", "Sonic");
            uberX.setPassenger(5);
            uberX.printDataCar();

            // Car car2 = new Car(2, "WIN7012", new Account(2, "Edwin2", "12345678",
            // "edwin1233@gmail.com"), 3);
            // car2.printDataCar();

        } catch (Exception e) {
            System.err.println(e);
        }

    }

}