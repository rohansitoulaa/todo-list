import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setError("");
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
    setError("");
  };
  const handleSubmitOnClick = () => {
    if (title) {
      setIsSubmit(true);
      // console.log(isSubmit); // this will be false because
      //  when you call console.log(isSubmit) right after
      // setting it, you're still seeing the old value (false),
      // because the new state hasn’t been applied yet cause use state
      // is an acyncronus state.
    } else {
      setError("There is no title or descripion.");
    }
  };

  return (
    <div className="flex flex-col gap-5 border-2 border-black items-center justify-center h-screen ">
      <div className="border-2 w-100 h-fit flex flex-col gap-2 p-5 rounded-2xl shadow-xl">
        <h1 className="text-center">Todo list</h1>
        <input
          onChange={(e) => handleTitleChange(e)}
          className="p-2 border-2 border-slate-500 hover:border-black rounded-xl text-xl"
          type="text"
          placeholder="Title"
        />
        <textarea
          onChange={(e) => handleDescriptionChange(e)}
          className="p-2 border-2 max-h-25 min-h-25 border-slate-500 hover:border-black rounded-xl text-xl"
          placeholder="task description"
        />
        <button
          className="border-2 px-3 py-2 rounded-md hover:bg-green-700 hover:text-white"
          onClick={handleSubmitOnClick}
        >
          Submit
        </button>
      </div>
      {isSubmit && (
        <div>
          <div>{title}</div>
          <div>{description}</div>
        </div>
      )}
      <div className="text-xl text-red-600">{error}</div>
    </div>
  );
};

export default App;
