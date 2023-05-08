const Questions = () => {
    return (
        <div className='container'>
            <div className='col content'>
                <div className='row'> DEPRESSED MOOD (sadness, hopeless, helpless, worthless)</div>
                <div className='row options'>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            Absent.
                        </button>
                    </div>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">

                            These feeling states indicated only on questioning.
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            These feeling states spontaneously reported verbally.

                        </button>
                    </div>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            Communicates feeling states non-verbally, i.e. through facial expression, posture, voice and tendency to weep.
                        </button>
                    </div>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            Patient reports virtually only these feeling states in
                            his/her spontaneous verbal and non-verbal
                            communication.
                        </button>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Questions;