
const Preloader = () => {
    return (
        <div>
            <div className=" min-h-screen fixed top-0 left-0 bg-black z-[100] w-full flex flex-col gap-5 justify-center items-center">
                <h1 className="text-5xl font-medium text-center text-white ">
                    C
                    <span className="text-transparent d-block bg-headerTextgradient bg-clip-text">
                        U
                    </span>
                    P
                    <span className="text-transparent d-block bg-headerTextgradient bg-clip-text">
                        I
                    </span>
                    D
                    <span className="text-transparent d-block bg-headerTextgradient bg-clip-text">
                        A
                    </span>
                    I
                </h1>
                <div className="p-2 rounded-full bg-bg-gradient animate-spin">
                    <div className="w-16 h-16 bg-black rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
