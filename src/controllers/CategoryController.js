import { AddCategory, GetAllCategories } from "../service/CategoryService";

export const AddCategoryController = (req, res, next) => {
  AddCategory(
    req.body,
    req.user.id,
    (result) => {
      return res.status(200).json(result);
    },
    (error) => {
      console.error(error);
      return res.status(500).json({
        message: "Database Error",
      });
    }
  );
};

export const GetCategoriesController = (req, res, next) => {
  GetAllCategories(
    req.user.id,
    (result) => {
      return res.status(200).json(result);
    },
    (error) => {
      console.error(error);
      return res.status(500).json({
        message: "Database Error",
      });
    }
  );
};
