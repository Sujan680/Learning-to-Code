export default function About() {
    const image = 'https://media.istockphoto.com/id/1411720693/photo/tasty-cups-of-coffee.jpg?s=612x612&w=0&k=20&c=8k47TxB-D4c5J-dBA1lY_9MeTam4mN7-2vKVS4ge0SM=';
    const name = "Sujan Magar";
    const age = 26;
    return (
        <>
            <h1>Helo my name is {name} and i am {age} yrs old </h1>
            <img src={image} alt="" />

        </>

    )
}