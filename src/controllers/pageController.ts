import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send('Home no controller');
};

export const bermudas = (req: Request, res: Response) => {
  res.send(`Bermudas aqui`);
};

export const oculos = (req: Request, res: Response) => {
  res.send(`Óculos aqui`);
};

export const tenis = (req: Request, res: Response) => {
  res.send(`Tenis aqui`);
};
