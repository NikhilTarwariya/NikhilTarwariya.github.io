#include <iostream>
using namespace std;

class Car
{
public:
    string brand;
    int speed;

    void showDetails() {
        // cout << "Brand: " << brand << ", Speed: " << speed << " km/h" << endl;
    };
    Car(int a)
    {
        cout << brand << "car" << a;
    };
};

int main()
{
    // Car car1;
    Car mycar(2);
    // car1.brand = "Tesla";
    // car1.speed = 250;
    // car1.showDetails();
    return 0;
};
