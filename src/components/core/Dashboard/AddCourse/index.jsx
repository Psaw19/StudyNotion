import RenderSteps from "./RenderSteps";

export default function AddCourse() {
  const courseUploadSteps = [
    {
      id: 1,
      step: "Set the Course Price option or make it free.",
    },
    {
      id: 2,
      step: "Standard size for the course thumbnail is 1024x576.",
    },
    {
      id: 3,
      step: "Video section controls the course overview video.",
    },
    {
      id: 4,
      step: "Course Builder is where you create & organize a course.",
    },
    {
      id: 5,
      step: "Add Topics in the Course Builder section to create lessons, quizzes, and assignments.",
    },
    {
      id: 6,
      step: "Information from the Additional Data section shows up on the course single page.",
    },
    {
      id: 7,
      step: "Make Announcements to notify any important",
    },
    {
      id: 8,
      step: "Notes to all enrolled students at once.",
    },
  ];

  return (
    <div>
      <div>
        <h1>Add Course</h1>
        <RenderSteps />
      </div>
      <div>
        <h2>Course Upload Tooltips</h2>
        {courseUploadSteps.map(({ id, step }) => (
          <li key={id}>{step}</li>
        ))}
      </div>
    </div>
  );
}
