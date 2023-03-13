function solution(k, room_number) {
  const parents = new Map();
  const getNextEmptyRoom = (room) => {
    if (!parents.has(room)) {
      parents.set(room, room + 1);
      return room;
    }
    const next = getNextEmptyRoom(parents.get(room));
    parents.set(room, next);
    return next;
  };
  return room_number.map((room) => getNextEmptyRoom(room));
}
