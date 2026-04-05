const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const API_URL = `${API_BASE_URL}/api/todos`;

const parseJsonSafely = async (response) => {
  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    return null;
  }

  const text = await response.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

export const getTodos = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch todos.");
  }

  return (await parseJsonSafely(response)) ?? [];
};

export const createTodo = async (todoData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo.");
  }

  return await parseJsonSafely(response);
};

export const updateTodo = async (id, updatedFields) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFields),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo.");
  }

  return await parseJsonSafely(response);
};

export const reorderTodos = async (orderedIds) => {
  const response = await fetch(`${API_URL}/reorder`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ orderedIds }),
  });

  if (!response.ok) {
    throw new Error("Failed to reorder todos.");
  }

  return await parseJsonSafely(response);
};

export const setAllTodosCompleted = async (completed) => {
  const response = await fetch(`${API_URL}/set-all-completed`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });

  if (!response.ok) {
    throw new Error("Failed to update all todos.");
  }

  return (await parseJsonSafely(response)) ?? [];
};

export const removeTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo.");
  }

  return await parseJsonSafely(response);
};

export const clearCompleted = async () => {
  const response = await fetch(API_URL, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to clear completed todos.");
  }

  return await parseJsonSafely(response);
};
