import prisma from "../../lib/prisma.js";
import { getDate } from "../../utils/dateUtils.js";
import { useSend } from "../../utils/useSend.js";

export const save = async (req, res) => {
  try {
    const { userId, qrData } = req.body;
    let dateCurrent = getDate();

    if (!qrData) {
      return res.status(400).json({ error: "qrData is required" });
    }

    const qrDesign = await prisma.qrDesign.create({
      data: {
        frame: qrData.qrDesign.frame,
        frameColor: qrData.qrDesign.frameColor,
        dots: qrData.qrDesign.dots,
        dotsColor: qrData.qrDesign.dotsColor,
        cornerSquare: qrData.qrDesign.cornerSquare,
        cornerSquareColor: qrData.qrDesign.cornerSquareColor,
        cornerDot: qrData.qrDesign.cornerDot,
        cornerDotColor: qrData.qrDesign.cornerDotColor,
      },
    });

    const newQR = await prisma.qr.create({
      data: {
        description: qrData.description,
        qr: qrData.qr,
        userId: userId,
        createdAt: dateCurrent,
        qrDesignId: qrDesign.id,
      },
    });

    const qrLogo = await prisma.qrLogo.create({
      data: {
        logo: qrData.qrLogo.logo,
        size: qrData.qrLogo.size,
        qrId: newQR.id
      },
    });
    
    const qrPreview = await prisma.qrPreview.create({
      data: {
        title: qrData.qrPreview.title,
        colorTitle: qrData.qrPreview.colorTitle,
        description: qrData.qrPreview.description,
        descriptionColor: qrData.qrPreview.descriptionColor,
        boxColor: qrData.qrPreview.boxColor,
        borderImg: qrData.qrPreview.borderImg,
        imgBoxBackgroud: qrData.qrPreview.imgBoxBackgroud,
        backgroudColor: qrData.qrPreview.backgroudColor,
        SelectOptions: qrData.qrPreview.SelectOptions,
        qrId: newQR.id
      },
    });

    const qrTextFont = await prisma.qrTextFont.create({
      data: {
        fontFamily: qrData.qrTextFont.fontFamily,
      },
    });

    const qrTextBubble = await prisma.qrTextBubble.create({
      data: {
        burbble: qrData.qrTextBubble.burbble,
        color: qrData.qrTextBubble.color,
      },
    });

    const qrText = await prisma.qrText.create({
      data: {
        text: qrData.qrText.text,
        positionX: qrData.qrText.positionX,
        positionY: qrData.qrText.positionY,
        colorText: qrData.qrText.colorText,
        fontSize: qrData.qrText.fontSize,
        qrTextFontId: qrTextFont.id,
        qrTextBubbleId: qrTextBubble.id,
        qrId: newQR.id
      },
    });

    res.status(201).json({ message: "QR saved successfully", qr: newQR });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getQrs = async (req, res) => {
  try {
    const { userId } = req.params;
    const qrs = await prisma.qr.findMany({ where: { userId } });
    res.status(200).json({ qrs });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
