const WorkshopCard = ({ title, imageSrc }) => {
    return (
        <div className="w-[392px] h-[267px] justify-center my-6 border mx-2 border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[14px] bg-opacity-10 backdrop-blur-lg shadow-xl drop-shadow-xl bg-blend-normal z-10">
        <div className="flex flex-col text-center justify-center px-6 py-4">
          <div className="flex flex-rows justify-around font-bold text-2xl text-black mb-2 my-3.5">
            <div className="mr-4">Workshop</div>
            <div>
              <img className="-mt-6" src={imageSrc} width={100} height={100} alt="icon" />
            </div>
          </div>
          <p className="my-3.5 h-[180px] text-3xl font-semibold text-center">
            {title}
          </p>
        </div>
      </div>
    );
  };
  
  export default WorkshopCard;