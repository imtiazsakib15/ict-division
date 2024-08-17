import nationalAnthem from "./../assets/images/audio/bd_national_anthem.mp3";

const NationalAnthem = () => {
  return (
    <>
      <figure>
        <figcaption className="text-lg sm:text-xl font-semibold pb-4">
          জাতীয় সংগীত
        </figcaption>
        <audio controls src={nationalAnthem}></audio>
      </figure>
    </>
  );
};

export default NationalAnthem;
