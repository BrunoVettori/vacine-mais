import { Request, Response } from "express";

class Crud {
  public async create(req: Request, res: Response, prisma_client: any) {
    const response = await prisma_client.create({
      data: req.body,
    });

    return res.json(response);
  }

  public async read(req: Request, res: Response, prisma_client: any) {
    const response = await prisma_client.findMany({
      where: req.body,
    });

    return res.json(response);
  }

  public async update(req: Request, res: Response, prisma_client: any) {
    const id = req.body.id;

    delete req.body.id;

    const response = await prisma_client.update({
      where: {
        id: id,
      },
      data: req.body,
    });

    return res.json(response);
  }

  public async delete(req: Request, res: Response, prisma_client: any) {
    const response = await prisma_client.delete({
      where: {
        id: req.body.id,
      },
    });

    return res.json(response);
  }
}

export default Crud;
