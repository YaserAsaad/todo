import React from "react";

function CustomButton(handleAddTodo) {
  return (
    <div>
      <button
        onClick={handleAddTodo}
        class="inline-block rounded-md w-fit text-center h-fit border border-indigo-600 bg-indigo-600 p-2 self-center cursor-pointer text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 text-2xl"
      >
        ADD
      </button>
    </div>
  );
}

export default CustomButton;
