export const getInfo = async (req, res) => {
    try {
        res.status(200).json({status: "user data shown"});
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }

};