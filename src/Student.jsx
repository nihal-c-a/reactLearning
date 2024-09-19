import propTypes from 'prop-types'
function Student(props){
    return(
        <div className="card">
            <p>Name:{props.Name}</p>
            <p>age:{props.age}</p>
            <p>Student:{props.isStudent?"yes":"no"}</p>
        </div>

    );
}
Student.propTypes={
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}
export default Student