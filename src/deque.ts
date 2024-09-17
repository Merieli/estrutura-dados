
export const deque = () => {
    class Deque {
        elements: any[];

        constructor() {
            this.elements = [];
        }

        isEmpty() {
            return this.elements.length === 0;
        }

        addFront(element: any) {
            this.elements.unshift(element);
        }

        addRear(element: any) {
            this.elements.push(element);
        }

        removeFront() {
            if (this.isEmpty()) {
                return 'Underflow';
            }
            return this.elements.shift();
        }

        removeRear() {
            if (this.isEmpty()) {
                return 'Underflow';
            }
            return this.elements.pop();
        }

        size() {
            return this.elements.length;
        }
    }
}