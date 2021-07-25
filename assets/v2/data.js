const site = {
    copyright: "MedMNIST Team",
    year: "2020-2021",
    url: "https://github.com/MedMNIST/medmnist.github.io",
    lastUpdated: "July, 2021",
};

const about = {
    title: "MedMNIST v2: A Large-Scale Lightweight Benchmark for 2D and 3D Biomedical Image Classification",
    authors: [
        {
            name: "Jiancheng Yang",
            href: "https://jiancheng-yang.com/"
        },
        {
            name: "Rui Shi",
        },
        {
            name: "Bingbing Ni",
            href: "https://scholar.google.com/citations?user=eUbmKwYAAAAJ"
        },
    ],
    affiliations: [
        "Shanghai Jiao Tong University, Shanghai, China",
    ],
    materials: [
        {
            name: "Paper",
            where: "arXiv",
            href: "https://arxiv.org/abs/2010.14925"
        },
        {
            name: "Code",
            where: "GitHub",
            href: "https://github.com/MedMNIST/MedMNIST"
        },
        {
            name: "Dataset",
            where: "Zenodo",
            href: "https://doi.org/10.5281/zenodo.4269852"
        }
    ],
    teaser: "assets/v2/imgs/overview.jpg"
};

const references = [
    {
        dataset: "PathMNIST",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Jakob Nikolas Kather, Johannes Krisam, et al., "Predicting survival from colorectal cancer histology slides using deep learning: A retrospective multicenter study," PLOS Medicine, vol. 16, no. 1, pp. 1–22, 01 2019.'
        ]
    },
    {
        dataset: "ChestMNIST",
        license: "CC0 1.0",
        licenseURL: "https://creativecommons.org/publicdomain/zero/1.0/",
        citations: [
            'Xiaosong Wang, Yifan Peng, et al., "Chestx-ray8: Hospital-scale chest x-ray database and benchmarks on weakly-supervised classification and localization of common thorax diseases," in CVPR, 2017, pp. 3462–3471.'
        ]
    },
    {
        dataset: "DermaMNIST",
        license: "CC BY-NC 4.0",
        licenseURL: "https://creativecommons.org/licenses/by-nc/4.0/",
        citations: [
            'Philipp Tschandl, Cliff Rosendahl, and Harald Kittler, "The ham10000 dataset, a large collection of multisource dermatoscopic images of common pigmented skin lesions," Scientific data, vol. 5, pp. 180161, 2018.',
            'Noel Codella, Veronica Rotemberg, et al.: “Skin Lesion Analysis Toward Melanoma Detection 2018: A Challenge Hosted by the International Skin Imaging Collaboration (ISIC)”, 2018; arXiv:1902.03368.'
        ]
    },
    {
        dataset: "OCTMNIST/PneumoniaMNIST",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Daniel S. Kermany, Michael Goldbaum, et al., "Identifying medical diagnoses and treatable diseases by image-based deep learning," Cell, vol. 172, no. 5, pp. 1122 – 1131.e9, 2018.'
        ]
    },
    {
        dataset: "RetinaMNIST",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'DeepDR Diabetic Retinopathy Image Dataset (DeepDRiD), "The 2nd diabetic retinopathy – grading and image quality estimation challenge," https://isbi.deepdr.org/data.html, 2020.'
        ]
    },
    {
        dataset: "BreastMNIST",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Walid Al-Dhabyani, Mohammed Gomaa, Hussien Khaled, and Aly Fahmy, "Dataset of breast ultrasound images," Data in Brief, vol. 28, pp. 104863, 2020.'
        ]
    },
    {
        dataset: "BloodMNIST",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Acevedo, A.et al.A dataset of microscopic peripheral blood cell images for development of automatic recognition systems.Data Brief 30, 105474, 2020.'
        ]
    },
    {
        dataset: "TissueMNIST",
        license: "CC BY 3.0",
        licenseURL: "https://creativecommons.org/licenses/by/3.0/",
        citations: [
            'Ljosa, V., Sokolnicki, K. L. & Carpenter, A. E. Annotated high-throughput microscopy image sets for validation.Nat.methods 9, 637–637, 2012.'
        ]
    },
    {
        dataset: "Organ{A/C/S}MNIST",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Patrick Bilic, Patrick Ferdinand Christ, et al., "The liver tumor segmentation benchmark (lits)," arXiv preprint arXiv:1901.04056, 2019.',
            'Xuanang Xu, Fugen Zhou, et al., "Efficient multiple organ localization in ct image using 3d region proposal network," IEEE Transactions on Medical Imaging, vol. 38, no. 8, pp. 1885–1898, 2019.'
        ]
    },
    {
        dataset: "OrganMNIST3D",
        license: "CC BY 4.0",
        licenseURL: "https://creativecommons.org/licenses/by/4.0/",
        citations: [
            'Patrick Bilic, Patrick Ferdinand Christ, et al., "The liver tumor segmentation benchmark (lits)," arXiv preprint arXiv:1901.04056, 2019.',
            'Xuanang Xu, Fugen Zhou, et al., "Efficient multiple organ localization in ct image using 3d region proposal network," IEEE Transactions on Medical Imaging, vol. 38, no. 8, pp. 1885–1898, 2019.'
        ]
    },
    {
        dataset: "NoduleMNIST3D",
        license: "CC BY 3.0",
        licenseURL: "https://creativecommons.org/licenses/by/3.0/",
        citations: [
            'Armato III, S. G. et al. The lung image database consortium (lidc) and image database resource initiative (idri): A completed reference database of lung nodules on ct scans. Med. Phys. 38, 915–931, 2011.'
        ]
    },
    {
        dataset: "FractureMNIST3D",
        license: "CC BY-NC 4.0",
        licenseURL: "https://creativecommons.org/licenses/by-nc/4.0/",
        citations: [
            'Jin, L. et al. Deep-learning-assisted detection and segmentation of rib fractures from ct scans: Development and validation of fracnet. EBioMedicine 62, 103106, 2020.'
        ]
    },
    {
        dataset: "VesselMNIST3D",
        license: "CC0 1.0",
        licenseURL: "https://creativecommons.org/publicdomain/zero/1.0/",
        citations: [
            'Yang, X., Xia, D., Kin, T. & Igarashi, T. Intra: 3d intracranial aneurysm dataset for deep learning. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2020.'
        ]
    },
]