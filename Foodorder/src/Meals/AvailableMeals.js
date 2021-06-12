import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 20,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 10,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 30,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 40,
    },
];

const AvailableMeals = () => {
    const mealslist = DUMMY_MEALS.map((meal) =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price} />);
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealslist}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;