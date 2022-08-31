const Todo = (props) => {
    const { todoName } = { todoName: 'Name missing', ...props };
    return (
        <div>
            {todoName} <label className="checkbox">
                <input type="checkbox" />
            </label>
        </div>
    );
};
export default Todo;