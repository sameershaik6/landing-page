const Home = (props) => {
    const { id } = props;
    console.log(props)
    return (
        <div id={id} style={{ height: '100vh', padding: '2rem', backgroundColor: '#d64cbdff' }}>
            <h1>Home</h1>
            <p>Welcome to our landing page.</p>
        </div>
    )
}

export default Home;