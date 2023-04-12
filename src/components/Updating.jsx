function Updating(){
    return(
        <div className="update">
            <h1>Updating</h1>
            <p>A component is updated whenever there is a change in the component's state or props.</p>
            <p>React has five built-in methods that gets called, in this order, when a component is updated:</p>
            <ol>
                <li>getDerivedStateFromProps()</li>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>componentDidUpdate()</li>
            </ol>
            <p>The render() method is required and will always be called, the others are optional and will be called if you define them.</p>
        </div>
    )
}

export default Updating;