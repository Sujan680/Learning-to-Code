
const Cards = () => {
    const images = [
        {
            img: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?q=80&w=363&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: 'flower image',
            id: 1,
            name: 'sujan magar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
        },
        {
            img: "https://images.unsplash.com/photo-1541143011610-fe5c3458686e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
            alt: 'flower image',
            id: 2,
            name: 'nature',
            description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '
        },
        {
            img: "https://images.unsplash.com/photo-1615560094221-ee0b118f0a65?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8cmljYVdNV2RXNkF8fGVufDB8fHx8fA%3D%3D",
            alt: 'flower image',
            id: 3,
            name: 'magar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '
        },
        {
            img: "https://images.unsplash.com/photo-1541143011610-fe5c3458686e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
            alt: 'flower image',
            id: 4,
            name: 'Flower',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '
        }
    ]
    console.log(images);
    return (
        <div>
             <h1  style={{textAlign: 'center'}}>This is card of flowers</h1>
            <div style={{
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'center',
                
            }}>
               
                {
                    images.map((imgItem) => 
                        <div key={imgItem.id} style={{
                            // border: '1px solid red',
                            padding: '20px',
                            width: '40%',
                            textAlign :'center',
                            margin: '20px',
                            borderRadius: '10px',
                            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
                        }}>
                            <img src={imgItem.img}  alt={imgItem.alt} 
                            style={{
                                width:  '100%',
                                height: '30vh',
                                objectFit: "cover",
                                borderRadius: '10px',
                                boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                                border:'none',
                                outline: 'none'
                            }}/>
                            <h2 style={{
                                fontSize: '24px',
                                fontWeight:'900',
                                fontStyle:'italic'
                            }}>Name : {imgItem.name} </h2>
                            <p style={{
                                fontStyle: 'oblique'
                            }}> {imgItem.description} </p>
                        </div>
                    )
                }

            </div>

        </div>
    )

}

export default Cards;

