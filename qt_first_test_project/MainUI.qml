import QtQuick 2.4

MainUIForm {
    id: myMain
    Component.onCompleted: {
        myMain.element.text = "Hello World!"
    }

    button.onClicked: {
        console.log("Hi! I'm in console.")
    }
}

/*##^##
Designer {
    D{i:0;autoSize:true;height:480;width:640}
}
##^##*/
