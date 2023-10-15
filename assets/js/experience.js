AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Robotics Engineer",
    cardImage: "assets/images/experience-page/black-bcr.png",
    place: "<a href='https://www.blackcoffeerobotics.com/'>Black Coffee Robotics</a>",
    time: "(2020 - 2023)",
    desp:" \
      <br/><li>Developed a custom Motion Planning <a href='https://ros-planning.github.io/moveit_tutorials/doc/moveit_task_constructor/moveit_task_constructor_tutorial.html#moveit-task-constructor'>MTC</a> architecture on a robotic arm for quadriplegic patients. The task subset included picking and placing objects, opening and closing doors and retrieving objects from a fridge.</li> \
      <br/><li>ROS and MoveIt! support for a custom set of <a href='https://sakerobotics.com/'>robotic grippers</a>.</li> \
      <br/><li><a href='https://www.linkedin.com/posts/blackcoffeerobotics_mobile-robot-docking-activity-6874641241074614272-BZbh'>Unity 3D simulation</a> for the MRP2 robot fully integrated with ROS.</li> \
      <br/><li>Coordinated on deploying a custom ROS2 stack for a fleet of autonomous boats.</li> \
      <br/><li>Generation of a <a href='https://medium.com/black-coffee-robotics/gazebo-projection-of-occupancy-maps-ae028e84ae9b'>tool</a> to create <a href='https://github.com/MatthewVerbryke/gazebo_terrain'>3D heightmaps</a> in Gazebo using occupancy grids.</li> \
      <br/><li>Prepared a custom Gazebo simulation for an Autonomous four-wheeled Lawnmower.</li> \
      "
  },
  {
    title: "AI Lead",
    cardImage: "assets/images/experience-page/isa.jpg",
    place: "<a href='https://www.isa.org/'>Industrial Society of Automation</a>",
    time: "(2020 - 2021)",
    desp: "\
      <br/><l>Trained and coached a team of five in developing simulations in Gazebo integrating different aspects of ROS for deploying warehouse robots.</l><br/>",
  },
  {
    title: "Electronics and AI Member",
    cardImage: "assets/images/experience-page/mrm.jpg",
    place: "<a href='https://www.marsrovermanipal.com/'>Mars Rover Manipal</a>",
    time: "(2019 - 2020)",
    desp: "\
      <br/><li>Developed and implemented a custom Alvar Tag gate traversal algorithm that enables the Mars Rover traverse autonomously between two ARTag gates.</li> \
      <br/><li>Implemented a navigation algorithm that allows the Mars Rover to traverse autonomously to any given location using an IMU and GPS module.</li> \
      "
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "<a href='https://github.com/Kinovarobotics/ros_kortex/commits?author=leander-dsouza'>ROS Kortex</a>",
    cardImage: "assets/images/experience-page/kinova.jpeg",
    description:
      "Fixes include setting correct joint limits pertaining to the Gen3 and Gen3 Lite arms, and overall improvements to the MoveIt! configuration files.",
  },
  {
    title: "<a href='https://github.com/ros-planning/moveit2/pull/1171'>MoveIt2!</a>",
    cardImage: "assets/images/experience-page/black-moveit.png",
    description:
      "Backported features that enable setting effort limits for the GripperCommand Action Server when controlling the gripper.",
  },
  {
    title: "<a href='https://github.com/ros-controls/gazebo_ros2_control/pull/121'>Gazebo ROS2 Control</a>",
    cardImage: "assets/images/experience-page/gazebo.png",
    description:
      "Ported ROS2 Control features to Gazebo which included the ability to mimic joints when opening and closing grippers.",
  },
  {
    title: "<a href='https://github.com/ros-controls/ros2_control/pulls?q=is%3Apr+is%3Aclosed+author%3Aleander-dsouza'>ROS2 Control</a>",
    cardImage: "assets/images/experience-page/white-ros_control.png",
    description:
      "Added features to improve visibility to the documentation for hardware interfaces.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">

      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</div>

      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

