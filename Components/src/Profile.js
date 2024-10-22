import "./Profile.css";

export default function Bio() {
  return (
    <div>
      <div className="intro">
        <h1 className="introduction">
          Hi i'm Adora <br /> Welcome to my website!
        </h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        <b>
          And <i>pictures</i>
        </b>
        of my Dog Nicca
      </p>
    </div>
  );
}
export function Profile() {
  return (
    <>
      <h1 className="Hey"> Hey Im Nicca .... Wanna play??</h1>
      <img
        className="image"
        src="https://i.pinimg.com/736x/32/f3/f4/32f3f4957c8b084ba3bbf43888a23e9e.jpg"
        alt="Katherine Johnson"
      />
      <img
        className="image"
        src="https://i.pinimg.com/736x/86/ad/f9/86adf971c17679c189f7f9972585fd35.jpg"
        alt="Katherine Johnson"
      />
      {/* <h1>click below to see my friends</h1>*/}
    </>
  );
}
export function Happydog() {
  return (
    <>
      <h2>Caring for your Dog</h2>
      <ul>
        <li>
          Ensure fresh water is always available and provide a balanced diet
          that meets your dog's nutritional needs,
          <br />
          considering their age, size, and activity level.
        </li>
        <li>
          Provide a comfortable and safe shelter, especially for outdoor dogs.
        </li>
        <li>
          Regular exercise is crucial for your dog's physical and mental health.{" "}
          <br />
          Daily walks, playtime, or trips to the dog park are essential.
        </li>
        <li>
          Schedule regular check-ups, vaccinations, and dental cleanings.
          <br />
          Address any health concerns promptly.
        </li>
      </ul>

      <h2>Training and Socialization</h2>
      <ul>
        <li>
          Use positive reinforcement techniques to train your dog.
          <br />
          Reward good behavior and avoid punishment.
        </li>
        <li>
          Expose your dog to various people, animals,
          <br />
          and environments to help them become well-adjusted.
        </li>
      </ul>
      <h2>Grooming</h2>
      <ul>
        <li>
          Regular brushing helps maintain your dog's coat health and prevents
          matting.
        </li>
        <li>Bathe your dog as needed, using a gentle shampoo.</li>
        <li>
          Trim your dog's nails regularly to prevent discomfort and injury.
        </li>
      </ul>
      <h2>Safety and security</h2>
      <ul>
        <li>
          Ensure your dog wears a collar with identification tags.
          <br />
          Consider microchipping for added security.
        </li>
        <li>
          Adhere to leash laws in your area and keep your dog on a leash when
          required.
        </li>
        <li>
          If you have an outdoor dog, ensure a secure fence to prevent them from
          wandering off.
        </li>
      </ul>
      <h2>Love and attention</h2>
      <ul>
        <li>
          Dogs thrive on companionship. <br />
          Spend quality time with your dog, playing, cuddling, and providing
          affection.
        </li>
      </ul>
    </>
  );
}

export function TodoList() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "dark blue",
        }}
      >
        {" "}
        <b>Remember:</b>
      </h1>
      <ul
        className="Rem"
        style={{
          backgroundColor: " yellow",
          color: "balck",
        }}
      >
        <li>
          {" "}
          Every dog is unique, and their specific needs may vary. <br />
          Consult with your veterinarian for personalized advice on caring for
          your furry friend.
        </li>
        <li>
          Taking care of a pet dog is a rewarding and fulfilling experience,
          <br />
          but it also comes with responsibility.
          <br />
          By following these guidelines and providing your dog with love and
          attention, <br />
          you can ensure that they have a long, happy, and healthy life.
        </li>
      </ul>
    </div>
  );
}
