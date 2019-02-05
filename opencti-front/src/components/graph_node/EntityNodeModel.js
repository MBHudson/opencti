import { NodeModel } from 'storm-react-diagrams';
import EntityPortModel from './EntityPortModel';

export default class EntityNodeModel extends NodeModel {
  constructor(data) {
    super('entity');
    this.addPort(new EntityPortModel('main'));
    this.extras = data;
    this.expanded = false;
  }

  setSelected(selected, expand = false) {
    this.selected = selected;
    this.iterateListeners((listener, event) => {
      if (listener.selectionChanged) {
        listener.selectionChanged({ ...event, expand, isSelected: selected });
      }
    });
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }

  setExpanded(expanded) {
    this.expanded = expanded;
  }

  getExpanded() {
    return this.expanded;
  }
}