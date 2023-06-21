export const startWidget = () => {
    const widget = document.createElement('div');
    widget.classList.add('widget');
    console.log(widget)
    renderWidgetToday()

    return widget;
    
    };

