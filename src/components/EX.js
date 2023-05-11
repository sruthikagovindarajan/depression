function EX(props) {
    return (

        <div className='container'>
            <div className='col content'>
                <div className='row'>
                    <h2>{props.qn}</h2>
                </div>
                <div className='row options'>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <h2>{props.o1}</h2>
                        </button>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <h2>{props.o2}</h2>
                        </button>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">

                            <h2>{props.o3}</h2>
                        </button>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">

                            <h2>{props.o4}</h2>
                        </button>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">

                            <h2>{props.o5}</h2>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EX;