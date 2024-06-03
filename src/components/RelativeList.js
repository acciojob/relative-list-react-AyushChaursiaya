function RelativeList() {
    const relatives = ['Uncle John', 'Aunt Mary', 'Cousin Jim', 'Grandma Anna', 'Grandpa Joe'];

    return (
        <div>
            <h1>Diwali is coming. It's time to shop. Here are the relatives I am planning to visit:</h1>
            <ol key='relativeList'>
                    {
                       relatives.map((relative, index) => (
                        <li key={`RelativeListItem${index + 1}`}>{relative}</li>
                       )) 
                    }
            </ol>
        </div>
    )
}

export default RelativeList;