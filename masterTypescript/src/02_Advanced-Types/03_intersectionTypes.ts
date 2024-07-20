//Intersection type
//

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidth = Draggable & Resizable; //type intersection: UIWidth have both type

let textBox: UIWidth = {
  drag: () => {},
  resize: () => {},
};
