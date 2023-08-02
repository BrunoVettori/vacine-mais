import { Router, Request, Response, NextFunction } from "express";
import { celebrate, Joi, Segments } from "celebrate";

import prisma from "../database/prisma";
import auth from "../middlewares/auth";
import Crud from "../modules/Crud";

const routes = Router();
const crud = new Crud();

routes.use(auth);

// #region Usuario

// Create
routes.post(
  "/usuario",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      sobrenome: Joi.string().required(),
      documento: Joi.string().min(11).max(11).required(),
      email: Joi.string().required(),
      senha: Joi.string().required(),
      telefone: Joi.string().required(),
      endereco: Joi.string(),
      role: Joi.string(),
    }),
  }),
  (req, res) => {
    crud.create(req, res, prisma.usuario);
  }
);

// Read
routes.get(
  "/usuario",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string(),
      nome: Joi.string(),
      sobrenome: Joi.string(),
      documento: Joi.string().min(11).max(11),
      email: Joi.string(),
      senha: Joi.string(),
      telefone: Joi.string(),
      endereco: Joi.string(),
      role: Joi.string(),
      ativo: Joi.bool(),
    }),
  }),
  (req, res) => {
    crud.read(req, res, prisma.usuario);
  }
);

// Update
routes.put(
  "/usuario",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
      documento: Joi.string().min(11).max(11),
      nome: Joi.string(),
      sobrenome: Joi.string(),
      email: Joi.string(),
      senha: Joi.string(),
      telefone: Joi.string(),
      endereco: Joi.string(),
      role: Joi.string(),
    }),
  }),
  (req, res) => {
    crud.update(req, res, prisma.usuario);
  }
);

// Delete
routes.delete(
  "/usuario",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  (req, res) => {
    crud.delete(req, res, prisma.usuario);
  }
);

// #endregion

// #region Animal

// Create
routes.post(
  "/animal",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      especie: Joi.string().required(),
      raca: Joi.string().required(),
      cor: Joi.string(),
      data_nascimento: Joi.date(),
      usuario_id: Joi.string().required(),
    }),
  }),
  (req, res) => {
    crud.create(req, res, prisma.animal);
  }
);

// Read
routes.get(
  "/animal",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string(),
      nome: Joi.string(),
      especie: Joi.string(),
      raca: Joi.string(),
      cor: Joi.string(),
      data_nascimento: Joi.string(),
      ativo: Joi.bool(),
      usuario_id: Joi.string(),
    }),
  }),
  (req, res) => {
    crud.read(req, res, prisma.animal);
  }
);

// Update
routes.put(
  "/animal",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
      nome: Joi.string(),
      especie: Joi.string(),
      raca: Joi.string(),
      cor: Joi.string(),
      data_nascimento: Joi.string(),
      ativo: Joi.bool(),
    }),
  }),
  (req, res) => {
    crud.update(req, res, prisma.animal);
  }
);

// Delete
routes.delete(
  "/animal",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  (req, res) => {
    crud.delete(req, res, prisma.animal);
  }
);

// #endregion

// #region Vacina

// Create
routes.post(
  "/vacina",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      data_aplicacao: Joi.date().required(),
      proxima_aplicacao: Joi.date(),
      veterinario_aplicou: Joi.string().required(),
      veterinario_crm: Joi.number().required(),
      animal_id: Joi.string().required(),
    }),
  }),
  (req, res) => {
    crud.create(req, res, prisma.vacina);
  }
);

// Read
routes.get(
  "/vacina",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string(),
      nome: Joi.string(),
      data_aplicacao: Joi.date(),
      proxima_aplicacao: Joi.date(),
      veterinario_aplicou: Joi.string(),
      veterinario_crm: Joi.number(),
      animal_id: Joi.string(),
    }),
  }),
  (req, res) => {
    crud.read(req, res, prisma.vacina);
  }
);

// Update
routes.put(
  "/vacina",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
      nome: Joi.string(),
      data_aplicacao: Joi.date(),
      proxima_aplicacao: Joi.date(),
      veterinario_aplicou: Joi.string(),
      veterinario_crm: Joi.number(),
    }),
  }),
  (req, res) => {
    crud.update(req, res, prisma.vacina);
  }
);

// Delete
routes.delete(
  "/vacina",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  (req, res) => {
    crud.delete(req, res, prisma.vacina);
  }
);

// #endregion

export default routes;
