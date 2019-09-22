import QtQuick 2.4
import QtQuick.Controls 2.5

Item {
    id: element1
    width: 600
    height: 400

    Rectangle {
        id: rectangle
        x: 100
        y: 45
        width: 200
        height: 84
        color: "#ffffff"
        radius: 100
        anchors.horizontalCenter: parent.horizontalCenter

        Text {
            id: element
            x: 88
            y: 93
            text: qsTr("Text")
            anchors.centerIn: parent
            font.pixelSize: 12
        }
    }

    Button {
        id: button
        x: 150
        y: 156
        text: qsTr("Button")
        anchors.horizontalCenter: parent.horizontalCenter
    }

    Dial {
        id: dial
        y: 243
        width: 100
        height: 100
        anchors.left: parent.left
        anchors.leftMargin: 100
        value: 50
        to: 100
    }

    TextField {
        id: textField
        x: 215
        y: 256
        width: 161
        height: 40
        text: Math.floor(dial.value) //dial.value.toFixed(2)
        anchors.right: parent.right
        anchors.rightMargin: 50
    }

    Connections {
        target: button
        onClicked: rectangle.color = "Green"
    }
}

/*##^##
Designer {
    D{i:4;anchors_x:87}D{i:5;anchors_height:40;anchors_width:161;anchors_x:215;anchors_y:256}
}
##^##*/

