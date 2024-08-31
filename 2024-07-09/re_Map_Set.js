const mapData = new Map();
mapData.set(1, "value number");
mapData.set("1", "value string");
console.log(mapData.get(1));
console.log(mapData.get("1"));

if (mapData.has(1)) {
  console.log("야호~");
}
