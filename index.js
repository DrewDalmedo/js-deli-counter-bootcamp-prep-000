

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  name = line.unshift();
  return `Currently serving ${name}.`;
}

function currentLine(line) {



}

const deliLine = ["Steven", "Blake", "Avi"]
nowServing(deliLine);
