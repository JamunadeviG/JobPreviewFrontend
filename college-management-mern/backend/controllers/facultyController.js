import Faculty from '../models/Faculty.js';

export const getFaculties = async (req, res) => {
  try {
    const facs = await Faculty.find().populate('departmentId', 'name');
    res.json(facs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createFaculty = async (req, res) => {
  try {
    const fac = await Faculty.create(req.body);
    res.status(201).json(fac);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateFaculty = async (req, res) => {
  try {
    const fac = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fac) return res.status(404).json({ message: 'Faculty not found' });
    res.json(fac);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    const fac = await Faculty.findByIdAndDelete(req.params.id);
    if (!fac) return res.status(404).json({ message: 'Faculty not found' });
    res.json({ message: 'Faculty removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};