(function() {
    if (document.querySelectorAll(".n-compare-pager").length) {
        const HIDDEN_CLASS_FOR_ARROW = "n-compare-pager_hidden_yes";

        const arrow = {
            left: document.querySelector(".n-compare-pager_side_left"),
            right: document.querySelector(".n-compare-pager_side_right"),
        };

        const canMove = {
            toLeft: !arrow.left.classList.contains(HIDDEN_CLASS_FOR_ARROW),
            toRight: !arrow.right.classList.contains(HIDDEN_CLASS_FOR_ARROW),
        };

        const KEYBOARD_ARROW = {
            LEFT: 37,
            RIGHT: 39,
        };

        function move({ keyCode }) {
            if (keyCode === KEYBOARD_ARROW.LEFT && canMove.toLeft) {
                arrow.left.click()
            } else if (keyCode === KEYBOARD_ARROW.RIGHT && canMove.toRight) {
                arrow.right.click();
            }

        }

        document.addEventListener('keydown', move);

        const test = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.target === arrow.right) {
                    canMove.toRight = !arrow.right.classList.contains(HIDDEN_CLASS_FOR_ARROW);
                } else if (mutation.target === arrow.left) {
                    canMove.toLeft = !arrow.left.classList.contains(HIDDEN_CLASS_FOR_ARROW);
                }
            });
        });

        test.observe(arrow.right, {
            attributes: true,
            attributeFilter: ["class"]
        });

        test.observe(arrow.left, {
            attributes: true,
            attributeFilter: ["class"]
        });
    }
})();
