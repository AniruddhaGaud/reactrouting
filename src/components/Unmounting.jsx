function Unmounting(){
    return(
        <div className="unmount">
            <h1>Unmounting</h1>
            <p>when a component is removed from the DOM, or unmounting as React likes to call it.</p>
            <p>React has only one built-in method that gets called when a component is unmounted:</p>
            <ol>
                <li>componentWillUnmount()</li>
            </ol>

        </div>
    )
}

export default Unmounting;